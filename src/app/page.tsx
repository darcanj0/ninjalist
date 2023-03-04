import DefaultLink from "@/components/DefaultLink/DefaultLink";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Routes } from "./routes";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        pariatur ipsa officiis voluptate rem, assumenda illo fugiat ipsum,
        repellendus ducimus quos esse consequatur! Non ab rerum voluptatibus
        esse ratione dolorum! Non, voluptatem vel. Nisi vero optio a dignissimos
        repudiandae. Iusto eveniet ex quas aut vel quibusdam asperiores non
        dolorem quisquam cum ab saepe repudiandae, repellendus facilis tenetur
        expedita unde omnis? In, cum error aperiam libero aliquid reprehenderit.
        Quae sint rerum deserunt nesciunt cum eligendi ipsum quas fugiat,
        perspiciatis id mollitia quibusdam. Ad doloremque quaerat temporibus
        sequi officia culpa nostrum ex?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        pariatur ipsa officiis voluptate rem, assumenda illo fugiat ipsum,
        repellendus ducimus quos esse consequatur! Non ab rerum voluptatibus
        esse ratione dolorum! Non, voluptatem vel. Nisi vero optio a dignissimos
        repudiandae. Iusto eveniet ex quas aut vel quibusdam asperiores non
        dolorem quisquam cum ab saepe repudiandae, repellendus facilis tenetur
        expedita unde omnis? In, cum error aperiam libero aliquid reprehenderit.
        Quae sint rerum deserunt nesciunt cum eligendi ipsum quas fugiat,
        perspiciatis id mollitia quibusdam. Ad doloremque quaerat temporibus
        sequi officia culpa nostrum ex?
      </p>
      <DefaultLink path={Routes.NINJAS} text="See Ninja Listing" />
      <Footer />
    </div>
  );
}
