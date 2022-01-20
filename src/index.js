import "./index.css";
import data from "../data.json";
import Comment from "./components/comment";


const root = document.getElementById('container');

data.comments.forEach(comment => root.appendChild(Comment(comment)));