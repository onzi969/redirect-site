import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>CLICK THE LINK!</Title>
      <h1>CLICK THE LINK!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://sites.google.com/my.sduhsd.net/studyhelpwav/home" target="_blank">
          studyhelp.wav
        </a>{" "}
        ty for using studyhelp.wav!
      </p>
    </main>
  );
}
