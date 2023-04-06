const initialState = {
    curUserName:JSON.parse(localStorage.getItem("user"))||{},
    isAuth:localStorage.getItem("user")?true:false,
    user:[],
    isError:false
} 