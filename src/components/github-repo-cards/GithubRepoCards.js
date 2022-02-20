import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getGithubRepo } from "../../redux/profile/profile.actions"
import "./GithubRepoCards.css"

const GithubRepoCards = ({ getGithubRepos, username, repos }) => {
    useEffect(() => {
        getGithubRepos(username)
    }, [])

    return (

        <div className="repo-cards">
            {repos.map(repo => {
                return <div className="card" >
                    <div className="card-content">
                        <div className="media">
                            <figure>
                                <img src={repo.owner.avatar.url} alt="Github avatar" />
                            </figure>
                            <div>
                                <a href={repo.html_url} >{repo.name}</a>
                                <p >{username}</p>
                            </div>
                            <div className="media-content">
                                {repo.description ? repo.description : "No description provided"}
                            </div>
                        </div>
                        <footer>
                            <p>{repo.stargazers_count}<i className="fas fa-star ml-2"></i></p>
                            <p>{repo.watchers_count}<i className="fas fa-eye ml-2"></i></p>
                            <p>{repo.fork_count}<i className="fas fa-code-branch ml-2"></i></p>
                        </footer>
                    </div>
                </div>
            }

            )}
        </div>
    )

}


const mapStateToProps = (state) => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepo })(GithubRepoCards)