import type { Component } from 'solid-js';
import { createSignal, onMount } from 'solid-js';

const deckurl = `https://deckofcardsapi.com/api/deck/new/`;

const App: Component = () => {
  const [deck, setDeck] = createSignal({
    deck_id: String,
    remaining: Number,
    shuffled: Boolean,
  });

  onMount(async () => {
    const res = await fetch(deckurl);
    setDeck(await res.json());
  });

  return (
    <>
      {console.log(deck())}
      {console.log(deck().deck_id)}
      <p>{JSON.stringify(deck())}</p>
    </>
  );
};

export default App;
