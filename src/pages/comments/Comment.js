import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

const Comment = ({ id, profile_id, profile_image, owner, updated_at, content, is_owner, setComments }) => {
    const [editMode, setEditMode] = useState(false);
    const [editContent, setEditContent] = useState(content);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setComments((prev) => ({
                ...prev,
                results: prev.results.filter((c) => c.id !== id),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleSaveEdit = async () => {
        try {
            await axiosRes.patch(`/comments/${id}/`, { content: editContent });
            setComments((prev) => ({
                ...prev,
                results: prev.results.map((c) =>
                    c.id === id ? { ...c, content: editContent } : c
                ),
            }));
            setEditMode(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="d-flex align-items-start mb-3">
            <Link to={`/profiles/${profile_id}`}>
                <Avatar
                    src={
                        profile_image?.startsWith("http")
                            ? profile_image
                            : "https://res.cloudinary.com/dctqmaht5/image/upload/v1752109202/default_profile_idzhze.jpg"
                    }
                    height={38}
                />
            </Link>
            <div className={styles.CommentBody} style={{ flex: 1 }}>
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        <span className={styles.CommentOwner}>{owner}</span>
                        <span className={styles.CommentDate}>{updated_at}</span>
                    </span>
                    {is_owner && !editMode && (
                        <MoreDropdown
                            handleEdit={() => setEditMode(true)}
                            handleDelete={handleDelete}
                        />
                    )}
                </div>
                {editMode ? (
                    <>
                        <textarea
                            className={`${styles.Form} w-100 mt-1`}
                            rows={2}
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />
                        <div className="d-flex" style={{ gap: "8px", marginTop: "4px" }}>
                            <button className={`${styles.Button} btn btn-sm`} onClick={handleSaveEdit} disabled={!editContent.trim()}>Save</button>
                            <button className="btn btn-sm btn-secondary" onClick={() => { setEditMode(false); setEditContent(content); }}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <p className={styles.CommentContent}>{content}</p>
                )}
            </div>
        </div>
    );
};

export default Comment;
