import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/CommentCreateEditForm.module.css";

const Comment = ({ profile_id, profile_image, owner, updated_at, content }) => {
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
            <div className={styles.CommentBody}>
                <span className={styles.CommentOwner}>{owner}</span>
                <span className={styles.CommentDate}>{updated_at}</span>
                <p className={styles.CommentContent}>{content}</p>
            </div>
        </div>
    );
};

export default Comment;
