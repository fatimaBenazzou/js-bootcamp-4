import words from "./wordList";

export default function () {
    return words[Math.floor(Math.random() * words.length)];
}
