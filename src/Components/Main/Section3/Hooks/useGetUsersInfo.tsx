import { useEffect, useState } from "react";

import UsersArray from "../Section3Data.json";

type UserWithImageType = {
  name: string;
  avatar_url: string;
  linkedin: string;
  stack: string;
};

export default function useGetUsersInfo() {
  const USERS_STORAGE = localStorage.getItem("USERS") ?? "[]";

  const [usersWithImageArray, setUsersWithImageArray] = useState<
    UserWithImageType[]
  >(() => JSON.parse(USERS_STORAGE));

  useEffect(() => {
    async function GetUserInfo() {
      if (JSON.parse(USERS_STORAGE).length) return;

      const userImagesArray = await FetchGitHubUsers(
        UsersArray.map((user) => user.username),
      );

      const usersWithImageArray: UserWithImageType[] = UsersArray.map(
        (user, i) => {
          const name = user.name;
          const avatar_url = userImagesArray[i].avatar_url;
          const linkedin = UsersArray[i].linkedin;
          const stack = UsersArray[i].stack;
          console.log(stack);

          return { name, avatar_url, linkedin, stack };
        },
      );

      setUsersWithImageArray(usersWithImageArray);
      localStorage.setItem("USERS", JSON.stringify(usersWithImageArray));
    }
    GetUserInfo();
  }, []);

  return { usersWithImageArray };
}

async function FetchGitHubUsers(usersArray: string[]) {
  const requests = usersArray.map((username) =>
    fetch(`https://api.github.com/users/${username}`).then((res) => {
      if (!res.ok) {
        throw new Error(`Erro ao buscar ${username}.`);
      }
      return res.json();
    }),
  );

  const responses = await Promise.all(requests);

  const users = responses.map((user) => {
    const { avatar_url } = user;

    return { avatar_url };
  });

  return users;
}
