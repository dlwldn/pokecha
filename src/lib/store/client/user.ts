import { atom, AtomEffect } from "recoil";
interface UserState {
    pokemonIdList: number[];
}

const localStrageEffect =
    (key: string): AtomEffect<UserState> =>
    ({ setSelf, onSet }) => {
        const savedValue = localStorage.getItem(key);
        if (savedValue !== null) {
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue, _, isReset) => {
            isReset
                ? localStorage.removeItem(key)
                : localStorage.setItem(key, JSON.stringify(newValue));
        });
    };

export const userState = atom<UserState>({
    key: "userState",
    default: {
        pokemonIdList: [],
    },
    effects: [localStrageEffect("user_pokemon_list")],
});
