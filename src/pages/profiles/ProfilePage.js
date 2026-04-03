import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/ProfilePage.module.css";

function ProfilePage() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [editBio, setEditBio] = useState(false);
    const [bioInput, setBioInput] = useState("");

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: profileData }, { data: postsData }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/posts/?owner__profile=${id}`),
                ]);

                setProfile(profileData);
                setPosts(postsData);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        handleMount();
    }, [id]);

    const handleSaveBio = async () => {
        try {
            const { data } = await axiosRes.patch(`/profiles/${id}/`, { bio: bioInput });
            setProfile((prev) => ({ ...prev, bio: data.bio }));
            setEditBio(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Row className="h-100">
            <Col lg={4} className="py-2 p-0 p-lg-2">
                <Container className={`${appStyles.Content} ${styles.ProfileCard}`}>
                    {hasLoaded && profile ? (
                        <div className="text-center">
                            <Image
                                className={styles.ProfileImage}
                                src={
                                    profile.profile_image?.startsWith("http")
                                        ? profile.profile_image
                                        : "https://res.cloudinary.com/dctqmaht5/image/upload/v1752109202/default_profile_idzhze.jpg"
                                }
                                roundedCircle
                            />
                            <h3 className={styles.Username}>{profile.owner}</h3>
                            <p className={styles.Handle}>@{profile.owner}</p>
                            {editBio ? (
                                <>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={bioInput}
                                        onChange={(e) => setBioInput(e.target.value)}
                                        className="mb-2"
                                    />
                                    <div className="d-flex justify-content-center" style={{ gap: "8px" }}>
                                        <button className="btn btn-sm btn-primary" onClick={handleSaveBio}>Save</button>
                                        <button className="btn btn-sm btn-secondary" onClick={() => setEditBio(false)}>Cancel</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className={styles.Bio}>
                                        {profile.bio ? profile.bio : "This user has not added a bio yet."}
                                    </p>
                                    {profile.is_owner && (
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => { setBioInput(profile.bio || ""); setEditBio(true); }}
                                        >
                                            Edit Bio
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>

            <Col lg={8} className="py-2 p-0 p-lg-2">
                <Container className={appStyles.Content}>
                    {hasLoaded ? (
                        posts.results.length ? (
                            <div className={styles.PostGrid}>
                                {posts.results.map((post) => (
                                    <Link
                                        key={post.id}
                                        to={`/posts/${post.id}`}
                                        className={styles.PostLink}
                                    >
                                        <Card className={styles.PostCard}>
                                            {post.image ? (
                                                <Card.Img
                                                    src={post.image}
                                                    className={styles.PostImage}
                                                />
                                            ) : (
                                                <div className={styles.NoImage}>
                                                    {post.caption}
                                                </div>
                                            )}
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <Asset message="No posts available for this user." />
                        )
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
        </Row>
    );
}

export default ProfilePage;