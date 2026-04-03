import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function PostsPage({ message, filter = "" }) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const [ordering, setOrdering] = useState("");
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axiosReq.get(
                    `/posts/?${filter}&search=${encodeURIComponent(query)}${
                        ordering ? `&ordering=${ordering}` : ""
                    }`
                );
                setPosts(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
                setHasLoaded(true);
            }
        };

        setHasLoaded(false);
        fetchPosts();
    }, [filter, pathname, query, ordering]);

    return (
        <Row className="h-100 justify-content-center">
            <Col xs={12} className="py-2 p-0 p-lg-2">
                <Form
                    onSubmit={(event) => event.preventDefault()}
                    className="mb-3"
                >
                    <div className={styles.SearchBar}>
                        <i className={`fas fa-search ${styles.SearchIcon}`} />
                        <Form.Control
                            type="text"
                            placeholder="Search by username..."
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            className="mb-2"
                        />
                    </div>

                    <Form.Control
                        as="select"
                        value={ordering}
                        onChange={(event) => setOrdering(event.target.value)}
                    >
                        <option value="" disabled>
                            Filter by...
                        </option>
                        <option value="-created_at">Newest</option>
                        <option value="-likes_count">Most liked</option>
                        <option value="-comments_count">Most commented</option>
                    </Form.Control>
                </Form>

                {hasLoaded ? (
                    <>
                        {posts.results.length ? (
                            <div className={styles.FeedWrapper}>
                                <InfiniteScroll
                                    dataLength={posts.results.length}
                                    loader={<Asset spinner />}
                                    hasMore={!!posts.next}
                                    next={() => fetchMoreData(posts, setPosts)}
                                >
                                    <div className={styles.Grid}>
                                        {posts.results.map((post) => (
                                            <Post
                                                key={post.id}
                                                {...post}
                                                setPosts={setPosts}
                                            />
                                        ))}
                                    </div>
                                </InfiniteScroll>
                            </div>
                        ) : (
                            <Container className={appStyles.Content}>
                                <Asset src={NoResults} message={message} />
                            </Container>
                        )}
                    </>
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset spinner />
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default PostsPage;
