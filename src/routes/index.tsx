import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import './index.css'
import StarsBg from '../components/StarsBg.jsx'
import { qwikify$ } from '@builder.io/qwik-react';

export const QStarsBg = qwikify$(StarsBg, { eagerness: 'load' });

export default component$(() => {

  return (
    <>

      <div class="page1">
        <QStarsBg />
      </div>

      <div class="page2">
        <div class="dummy">
          <QStarsBg />
        </div>
      </div>

      <div class="page3">

        <div class="dummy">
          <QStarsBg />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
