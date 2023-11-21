import React, { useContext, useState } from "react";
import MockUser from "./mockdata/SampleUser";
import MockRepos from "./Mockdata/MockRepos";
import FollowersMock from "./Mockdata/FollowersMock";
import { customFetch } from "./utils";
import { useAuth0 } from "@auth0/auth0-react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [githubUser, setGithubUser] = useState(MockUser);
  const [errorVal, setError] = useState({
    err: false,
    text: "There was an error",
  });
  const [userRepos, setRepos] = useState(MockRepos);
  const [followerUser, setFollowers] = useState(FollowersMock);
  const [searchUser, setSearchUser] = useState("");
  const [isLoadingData, setLoading] = useState(false);
  const languageData = userRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});
  const arrLang = Object.values(languageData)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  const stars = userRepos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const arrStars = Object.values(stars)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  const repos = userRepos.reduce((total, item) => {
    const { stargazers_count, name, forks_count } = item;
    if (!name) return total;
    else {
      total[name] = {
        label: name,
        value: stargazers_count,
        forks: forks_count,
      };
    }
    return total;
  }, {});

  const arrRepos = Object.values(repos)
    .sort((a, b) => b.value - a.value)
    .map((item) => {
      return { ...item, value: item.value };
    })
    .slice(0, 5);

  const arrForks = Object.values(repos)
    .sort((a, b) => b.forks - a.forks)
    .map((item) => {
      return { ...item, value: item.forks };
    })
    .slice(0, 5);

  const searchContent = async (user) => {
    setLoading(true);
    setError(false);
    const newUser = user?.split(" ")?.join("-");
    try {
      const response1 = await customFetch.get(`/users/${newUser}`);
      setGithubUser(response1.data);
      const response2 = await customFetch(`/users/${newUser}/followers`);
      setFollowers(response2.data);
      const response3 = await customFetch(
        `/users/${newUser}/repos?per_page=100`
      );
      setRepos(response3.data);
      await Promise.allSettled(setLoading(false));
    } catch (error) {
      if (error?.response?.data?.message === "Not Found") {
        setError(() => {
          console.log(error);
          return { err: true, text: error.response.data.message };
        });
      }
    }
  };
  // const searchRequest = async (user) => {
  //   const newUser = user?.split(" ")?.join("-");
  //   setLoading(true);
  //   setError(() => {
  //     return { err: false, text: "" };
  //   });
  //   try {
  //     const response = await customFetch.get(`/users/${newUser}`);
  //     setGithubUser(response.data);
  //   } catch (error) {
  //     console.log(error);
  //     setError(() => {
  //       console.log(error);
  //       return { err: true, text: error.response.data.message };
  //       setLoading(false);
  //     });
  //   }
  // };

  // const searchFollowers = async (user) => {
  //   const newUser = user?.split(" ")?.join("-");
  //   try {
  //     const response = await customFetch(`/users/${newUser}/followers`);
  //     setFollowers(response.data);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  //   const searchRepos = async (user) => {
  //     const newUser = user?.split(" ")?.join("-");
  //     try {
  //       const response = await customFetch(
  //         `/users/${newUser}/repos?per_page=100`
  //       );
  //       setRepos(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };
  // };

  return (
    <AppContext.Provider
      value={{
        githubUser,
        userRepos,
        followerUser,
        languageData,
        arrLang,
        arrStars,
        arrRepos,
        arrForks,
        errorVal,
        setError,
        searchUser,
        setSearchUser,
        searchContent,
        isLoadingData,
        isLoading,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
