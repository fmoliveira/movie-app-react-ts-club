import React from "react";
import MovieList from "./MovieList";

export default {
  title: "Movie List",
};

const mockData = [
  {
    id: 1,
    title: "Rogue",
    poster: "/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
    backdrop: "/x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
    rating: 6,
  },
  {
    id: 2,
    title: "Project Power",
    poster: "/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
    backdrop: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
    rating: 6.7,
  },
  {
    id: 3,
    title: "One Night in Bangkok",
    poster: "/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg",
    backdrop: "/riDrpqQtZpXGeiJdlmfcwwPH7nN.jpg",
    rating: 7.1,
  },
  {
    id: 3,
    title: "Superman: Man of Tomorrow",
    poster: "/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
    backdrop: "/bazlsLkNuhy3IuhviepqvlMm2hV.jpg",
    rating: 7.5,
  },
  {
    id: 4,
    title: "Peninsula",
    poster: "/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
    backdrop: "/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
    rating: 7.4,
  },
  {
    id: 5,
    title: "Ava",
    poster: "/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg",
    backdrop: "/ekkuqt9Q2ad1F7xq2ZONP0oq36P.jpg",
    rating: 6.3,
  },
  {
    id: 6,
    title: "The Crimes That Bind",
    poster: "/5pe30v0z4ucVgwh5nR439cCzwwO.jpg",
    backdrop: "/cVdYaAQmd5DZNdo0KFJruz7JpUs.jpg",
    rating: 6.9,
  },
  {
    id: 7,
    title: "Bill & Ted Face the Music",
    poster: "/4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg",
    backdrop: "/oazPqs1z78LcIOFslbKtJLGlueo.jpg",
    rating: 6.5,
  },
  {
    id: 8,
    title: "Scoob!",
    poster: "/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
    backdrop: "/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",
    rating: 7.4,
  },
  {
    id: 9,
    title: "Deathstroke: Knights & Dragons - The Movie",
    poster: "/vFIHbiy55smzi50RmF8LQjmpGcx.jpg",
    backdrop: "/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg",
    rating: 7,
  },
  {
    id: 10,
    title: "The Tax Collector",
    poster: "/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg",
    backdrop: "/zogWnCSztU8xvabaepQnAwsOtOt.jpg",
    rating: 6,
  },
  {
    id: 11,
    title: "The Old Guard",
    poster: "/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
    backdrop: "/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",
    rating: 7.3,
  },
  {
    id: 12,
    title: "The Bay of Silence",
    poster: "/oB3LX9C3FbJvPtrk1J7qHQKvzLr.jpg",
    backdrop: "/gQa5l8NrPHQzoqLeideAzuPMZQj.jpg",
    rating: 3.6,
  },
  {
    id: 13,
    title: "Hard Kill",
    poster: "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
    backdrop: "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
    rating: 6,
  },
  {
    id: 14,
    title: "Phineas and Ferb  The Movie Candace Against the Universe",
    poster: "/n6hptKS7Y0ZjkYwbqKOK3jz9XAC.jpg",
    backdrop: "/lkeBhXGJFRlhI7cBWn8LQQAdZqK.jpg",
    rating: 6.8,
  },
  {
    id: 15,
    title: "Artemis Fowl",
    poster: "/tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
    backdrop: "/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
    rating: 5.8,
  },
  {
    id: 16,
    title: "Deep Blue Sea 3",
    poster: "/bKthjUmxjHjvJK8FktFfQdmwP12.jpg",
    backdrop: "/hIHtyIYgBqHybOgUdoAmveipuiO.jpg",
    rating: 6.3,
  },
  {
    id: 17,
    title: "Archive",
    poster: "/eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
    backdrop: "/u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg",
    rating: 6.3,
  },
  {
    id: 18,
    title: "We Bare Bears: The Movie",
    poster: "/kPzcvxBwt7kEISB9O4jJEuBn72t.jpg",
    backdrop: "/q4j6dUAPJKeWB1OHmSq6YELVWR2.jpg",
    rating: 7.8,
  },
  {
    id: 19,
    title: "Tenet",
    poster: "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    backdrop: "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
    rating: 7.6,
  },
];

export const emptyMoviesList = () => <MovieList moviesList={[]} />;

export const listWithSomeMovies = () => <MovieList moviesList={mockData} />;
