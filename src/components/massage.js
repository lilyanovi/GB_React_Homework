import style from'./massage.module.css'

export default function Message(props) {
    return (
      <>
        <header className={style.center}>
          <h1 className={style.text}>Massage: <span>{props.text}</span> </h1>
        </header>
      </>
    );
  }