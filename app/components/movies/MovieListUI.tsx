"use client";

import styles from "./movies.module.css";
import { useAppSelector} from "@/lib/hooks";
import { selectMovies} from "@/lib/features/movies/movieSlice";
import SearchBar from "@/app/components/movies/SearchBar";
import MoviesTable from "@/app/components/movies/MoviesTable";
import {useMemo, useState} from "react";

export default function MovieListUI() {

    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //    dispatch(loadMovies());
    // },[]);

    const moviesItem = useAppSelector(selectMovies);

    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState('Original');

    const filteredMovies = useMemo(() => {
        const moviesToManipulate = moviesItem || []; // this is important to solve ts error undefined

        const filter = moviesToManipulate.filter((movie) => {
            return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if (sort !== 'Original') {
            return [...filter].sort((a, b) => {
                const nameA = a.title.toUpperCase(); // ignore upper and lowercase
                const nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return sort === 'Ascending' ? -1 : 1;
                }
                if (nameA > nameB) {
                    return sort === 'Ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        else {
            return filter;
        }
    },[moviesItem, searchTerm, sort]);

    return (
        <div className={styles.movieList}>
            <h5 className={`alert alert-info ${styles.stickyTitle}`}>Total Movies: {moviesItem.length}</h5>
            <SearchBar className={`${styles.stickySearch}`}
                       searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                       sort={sort} setSort={setSort}/>
            <MoviesTable movies={filteredMovies}/>
        </div>
    )
}