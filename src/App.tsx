import { SignupForm } from '../components/index'

const App = () => {
    
    const onSubmit = (form: { thumbnail: string, email: string, nickname: string, userId: string, desc: string, agree: boolean }) => {
        console.log(form)
    }
    
    return <SignupForm onSubmit={onSubmit} />;
}

export default App;