
function AppRouter() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true)
            }
            else{
                setIsAuth(false)
            }
        })
    }, [])
    return (
        <Router>
            {isAuth ?
                <Switch>
                    <Route exact path="/" component={Profile} />
                </Switch>
                :
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    
                </Switch>
            }
        </Router>
    )
}

export default AppRouter;
