import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import Post from "./Post";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });
    const [comments, setComments] = useState({ results: [] });

    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data: post } = await axiosReq.get(`/posts/${id}/`);
                setPost({ results: [post] });
            } catch (err) {
                console.log(err);
            }

            try {
                const { data: comments } = await axiosReq.get(`/comments/?post=${id}`);
                console.log("COMMENTS API RESPONSE:", comments);
                setComments(comments);
            } catch (err) {
                console.log("COMMENTS FETCH ERROR:", err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100 justify-content-center">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Post {...post.results[0]} setPosts={setPost} postPage />

                <Container className={appStyles.Content}>
                    {currentUser && (
                        <CommentCreateForm
                            profile_id={currentUser.profile_id}
                            post={id}
                            setPost={setPost}
                            setComments={setComments}
                        />
                    )}

                    {comments.results.length ? (
                        <div className="mt-3">
                            {comments.results.map((comment) => (
                                <Comment key={comment.id} {...comment} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center mt-3" style={{ color: "var(--got-text-dim)", fontSize: "0.9rem" }}>
                            No comments yet. Be the first to comment!
                        </p>
                    )}
                </Container>
            </Col>
        </Row>
    );
}

export default PostPage;
