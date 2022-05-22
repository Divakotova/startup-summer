import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import RepoList from './RepoList';
import { UserRepo } from '../../components/types';
import EmptyRepos from '../../components/EmptyRepos';
import RightArrowSVG from '../../assets/RightArrow';
import LeftArrowSVG from '../../assets/LeftArrowSVG';

function getGitHubPageCount(repoCount: number, perPage: number): number {
  const count = Math.ceil(repoCount / perPage);
  return count;
}

function getCurrentPerPage(repoCount: number, pageOffset: number, perPage: number): number {
  const restRepo = repoCount - pageOffset * perPage;
  return restRepo >= perPage ? perPage : restRepo;
}

function numbersCurrentRepos(pageOffset: number, perPage: number, currentPerPage: number): string {
  const startRepo = pageOffset * perPage + 1;
  const endRepo = pageOffset * perPage + currentPerPage;
  return startRepo === endRepo ? `${startRepo}` : `${startRepo} - ${endRepo}`;
}

export default function Paginate(prop: { repoCount: number; userName: string; perPage: number }): JSX.Element {
  const { repoCount, userName, perPage } = prop;
  const [repositories, setRepositories] = useState<UserRepo[]>([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [apiError, setApiError] = useState('');
  const currentPerPage = getCurrentPerPage(repoCount, pageOffset, perPage);
  useEffect(() => {
    const resp = async (): Promise<void> => {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos?q=stars%3A%3E0&sort=stars&per_page=${currentPerPage}&order=desc&page=${
          pageOffset + 1
        }`,
      );
      const responseJson: UserRepo[] = await response.json();
      if (!response.ok) {
        setApiError('Error');
        setRepositories([]);
        return;
      }
      const newPageCount = getGitHubPageCount(repoCount, perPage);
      setPageCount(newPageCount);
      setRepositories(responseJson);
    };
    if (userName) {
      resp();
    }
  }, [pageOffset, userName]);

  const handlePageChange = (event: any): void => {
    setPageOffset(event.selected);
  };

  if (!repoCount) {
    return (
      <section className="repositories repoWrapper">
        <EmptyRepos />
      </section>
    );
  }

  return (
    <div className="repoWrapper">
      {apiError && (
        <div className="alert alert-danger" role="alert">
          {apiError}
        </div>
      )}
      <RepoList repoCount={repoCount} repoList={repositories} />
      <nav className="reposCount">
        <p>
          {numbersCurrentRepos(pageOffset, perPage, currentPerPage)} of {repoCount} items
        </p>
        <ReactPaginate
          previousLabel={<LeftArrowSVG />}
          nextLabel={<RightArrowSVG />}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={pageOffset}
        />
      </nav>
    </div>
  );
}
