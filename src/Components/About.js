export default function About(props) {
    return (
        <>
            <div className="container" style={{ color: props.mode === 'black' ? 'white' : 'black' }}>
                <center><h2>{props.heading}</h2></center>
                <p>
                    <h4>TextUtils is a web app designed to manipulate your string the way you want.It converts the text to uppercase,lowercase,
                        copy text,clear text and give the number of unique words.<br />
                        This app works in two modes light mode and dark mode.<br/>
                        This app is entirely based on React App.
                        </h4>
                </p>
                <p>
                    <h5>
                        The app is designed by <a href="https://www.linkedin.com/in/rahul-srivastava-882180191/">Rahul Srivastava</a>✨<br />
                    </h5>
                </p>
            </div>
        </>
    )
}