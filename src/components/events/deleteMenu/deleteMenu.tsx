import "./deleteMenu.scss";

import Button from "../../common/Button/Button";

export default function DeleteMenu({
    eventTitle,
    onClose,
    onDelete,
}: {
    eventTitle: any;
    onClose: () => void;
    onDelete: () => void;
}) {
    return (
        <div className="delete-menu-container">
            <p>
                Are you sure you want to delete Event <span>{eventTitle}</span>{" "}
                You'll no longer have access to it.
            </p>
            <div className="buttons">
                <Button label="Cancel" color="secondary" onClick={onClose} />
                <Button label="Delete" color="primary" onClick={onDelete} />
            </div>
        </div>
    );
}
