import React, { useEffect, useState } from 'react'
import BottomTab from '../Components/BottomTab'
import { IoPerson, IoHeartOutline, IoChatbubbleOutline, IoShareOutline, IoHeart } from 'react-icons/io5'
import PostCard from '../Components/Home/PostCard';
import axios from 'axios'
import Loading from '../Components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import SnackbarComponent from '../Components/SnackbarComponent';

const Home = () => {

    const [chars, setChars] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [posts, setPosts] = useState([]);
    const [snackbar, setSnackbar] = useState({
        open: false,
        severity: '',
        message: ''
    });

    const handleClose = () => {
        setSnackbar({ ...snackbar, open: false });
    }

    let id = localStorage.getItem("userId");
    let postDet = localStorage.getItem("post");

    const navigate = useNavigate();

    const sendPost = () => {
        setLoading2(true);
        const data = {
            poster: id,
            postContent: postDet
        }
        axios
            .post('http://localhost:5555/posts', data)
            .then((req, res) => {
                setSnackbar({
                    message: "Post sent successfully",
                    open: true,
                    severity: 'success'
                })
                localStorage.removeItem("post");
                setChars(0);
                window.location.reload();
                setLoading2(false);
            })
            .catch((err) => {
                if(err.response) {
                    alert(err.response.data.message);
                }else {
                    alert(err.message)
                }
                setLoading2(false);
            })
    }
    

    useEffect(() => {

        if(id) {
            
            if(localStorage.getItem("post")) {
                setChars(localStorage.getItem("post").length);
            }

            setLoading(true);
            axios
                .get('http://localhost:5555/posts/postdetails')
                .then((req, res) => {
                    setPosts(req.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setSnackbar({
                        message: error.message,
                        open: true,
                        severity: 'error'
                    });
                    setLoading(false);
                })
        }else {
            setSnackbar({
                message: "Login to view page.",
                open: true,
                severity: 'error'
            })
            navigate('/');
        }

    }, [])

    return (
        <div className='dark:bg-zinc-700 dark:text-white min-h-dvh pt-5'>
            {localStorage.getItem("userId") && (
                <>
                    <div className='w-11/12 bg-gray-100 dark:bg-zinc-900 rounded-lg m-auto p-3 flex flex-row justify-between gap-5'>
                        <IoPerson size='3em' className='outline p-2 rounded-full' />
                        <div className='flex flex-col items-end gap-3 w-11/12'>
                            <textarea onChange={(e) => {setChars(e.target.value.length); localStorage.setItem("post", e.target.value)}} type="text" name="" id="" value={localStorage.getItem("post")} className='bg-transparent text-lg outline-none w-full' placeholder='What do you have to share?'></textarea>
                            <div className='flex flex-row items-center justify-between gap-3'>
                                <p>{chars}/150</p>
                                <button onClick={() => {chars==0?alert("Empty"):sendPost()}} className={chars==0? 'bg-stone-500 dark:bg-blue-900 py-2 px-4 text-white font-semibold rounded-full opacity-40 cursor-not-allowed':'bg-stone-500 dark:bg-blue-900 py-2 px-4 text-white font-semibold rounded-full'}>Post</button>
                            </div>
                        </div>
                    </div>

                    <hr style={{height: 2}} className='mt-3 outline-none border-none m-auto w-11/12 bg-gray-700 dark:bg-gray-500 rounded-full' />

                    {/* onDoubleClick={() => {!liked?setLikeCount(likeCount+1):''; setLiked(true)}} */}
                    {loading && (
                        <div className='flex items-center justify-center fixed w-full h-dvh top-0'>
                            <Loading />
                        </div>
                    )}
                    {loading2 && (
                        <div className='flex items-center justify-center fixed w-full h-dvh top-0'>
                            <Loading />
                        </div>
                    )}

                    {!loading && (
                        <div className='pb-20'>
                            {posts.map((items, i) => {
                                return <Link to={`/posts/${items._id}`}><PostCard key={i} fullname={items.poster.fullname} username={items.poster.username} content={items.postContent} time={items.createdAt} likes={items.likes.length} comments={items.comments.length} shares={items.shares.length} /></Link>
                            })}
                        </div>
                    )}

                    <BottomTab />
                </>
            )}

            {!localStorage.getItem("userId") && (
                <div>
                    <p>Login to view this page</p>
                </div>
            )}

            <SnackbarComponent
                open={snackbar.open}
                message={snackbar.message}
                handleClose={handleClose}
                severity={snackbar.severity}
            />

        </div>
    )
}

export default Home