import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const CommentSection = () => {
  const param = useParams();

  const { currentUser } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <h4>Comments</h4>
    </div>
  );
};

export default CommentSection;
