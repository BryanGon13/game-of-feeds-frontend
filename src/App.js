import styles from './App.module.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || '';

  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.ContentWrapper}>
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <PostsPage message='No results found. Please search for another keyword.' />} />
            <Route exact path="/feed" render={() => <PostsPage message='No results found. Start following new users or search for another keyword.' filter={`owner__followed__owner__profile=${profile_id}&`} />} />
            <Route exact path="/liked" render={() => <PostsPage message='No results found. Start liking posts or search for another keyword.' filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/posts/create" render={() => <PostCreateForm />} />
            <Route exact path="/posts/:id" render={() => <PostPage />} />
            <Route render={() => <p>Page not found</p>} />
          </Switch>
        </Container>
      </div>
    </div >
  );
}

export default App;