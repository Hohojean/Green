import LoginUs from "../components/LoginUs/LoginUs";

const LoginUser = ({ setOnuser, userlist, setPaycash }) => {
    return <LoginUs
        setOnuser={setOnuser}
        userlist={userlist}
        setPaycash={setPaycash}
    />
};

export default LoginUser;