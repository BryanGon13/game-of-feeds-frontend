import React from 'react';
import styles from '../../styles/Post.module.css';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { MoreDropdown } from '../../components/MoreDropdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        caption,
        image,
        updated_at,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const avatarSrc = profile_image?.startsWith("http")
        ? profile_image
        : "https://res.cloudinary.com/dctqmaht5/image/upload/v1752109202/default_profile_idzhze.jpg";

    const handleEdit = () => history.push(`/posts/${id}/edit`);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            alert("Post deleted successfully!");
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) =>
                    post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post
                ),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) =>
                    post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post
                ),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    // ── Feed grid card (compact, light) ───────────────────────────────────
    if (!postPage) {
        return (
            <Card className={styles.FeedCard}>
                <div
                    className={styles.FeedImageWrapper}
                    onClick={() => history.push(`/posts/${id}`)}
                >
                    <Card.Img src={image} className={styles.FeedImage} />
                </div>
                <Card.Body className={styles.FeedBody}>
                    <div className={styles.FeedHeader}>
                        <Link
                            to={`/profiles/${profile_id}`}
                            className={styles.FeedProfileLink}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Avatar src={avatarSrc} height={30} />
                            <span className={styles.FeedOwner}>{owner}</span>
                        </Link>
                        {is_owner && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                    {caption && (
                        <p className={styles.FeedCaption}>{caption}</p>
                    )}
                    <div className={styles.FeedStats}>
                        {is_owner ? (
                            <span>
                                <i className="far fa-heart" /> {likes_count}
                            </span>
                        ) : like_id ? (
                            <span onClick={handleUnlike} style={{ cursor: "pointer" }}>
                                <i className={`fas fa-heart ${styles.Heart}`} /> {likes_count}
                            </span>
                        ) : currentUser ? (
                            <span onClick={handleLike} style={{ cursor: "pointer" }}>
                                <i className={`far fa-heart`} style={{ color: "#aaa" }} /> {likes_count}
                            </span>
                        ) : (
                            <span>
                                <i className="far fa-heart" /> {likes_count}
                            </span>
                        )}
                        <span
                            onClick={() => history.push(`/posts/${id}`)}
                            style={{ cursor: "pointer" }}
                        >
                            <i className="far fa-comments" /> {comments_count}
                        </span>
                    </div>
                </Card.Body>
            </Card>
        );
    }

    // ── Full detail view (used in PostPage) ───────────────────────────────
    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`} className="d-flex align-items-center gap-2">
                        <Avatar src={avatarSrc} height={55} />
                        <span>{owner}</span>
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                </Media>
            </Card.Body>

            <Link to={`/posts/${id}`}>
                <Card.Img src={image} />
            </Link>

            <Card.Body>
                {caption && <Card.Text>{caption}</Card.Text>}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;
