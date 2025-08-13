// ABOUTME: [GitHub portfolio component displaying repositories and user stats]
// ABOUTME: [Educational component showing data fetching and display patterns]

'use client';

import { useEffect, useState } from 'react';
import { GitHubRepo, GitHubUser, fetchUserRepos, fetchUserProfile } from '../lib/github';

interface GitHubPortfolioProps {
  username: string;
}

export default function GitHubPortfolio({ username }: GitHubPortfolioProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGitHubData() {
      try {
        setLoading(true);
        const [reposData, userData] = await Promise.all([
          fetchUserRepos(username),
          fetchUserProfile(username)
        ]);
        
        setRepos(reposData);
        setUser(userData);
      } catch (err) {
        setError('Failed to load GitHub data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
        <p className="mt-2 text-sm text-foreground/70">Loading GitHub data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 text-sm">{error}</p>
        <p className="text-xs text-foreground/70 mt-1">Check console for details</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* GitHub Stats */}
      {user && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-foreground/5 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{user.public_repos}</div>
            <div className="text-xs text-foreground/70">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{user.followers}</div>
            <div className="text-xs text-foreground/70">Followers</div>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <div className="text-2xl font-bold text-foreground">{username}</div>
            <div className="text-xs text-foreground/70">GitHub</div>
          </div>
        </div>
      )}

      {/* Repository Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <article key={repo.id} className="border border-foreground/10 rounded-lg p-4 hover:border-foreground/20 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-sm truncate flex-1">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground/80 transition-colors"
                >
                  {repo.name}
                </a>
              </h3>
              {repo.stargazers_count > 0 && (
                <span className="text-xs text-foreground/70 flex items-center gap-1 ml-2">
                  ⭐ {repo.stargazers_count}
                </span>
              )}
            </div>
            
            {repo.description && (
              <p className="text-xs text-foreground/80 mb-3 line-clamp-2">
                {repo.description}
              </p>
            )}
            
            <div className="flex items-center justify-between text-xs">
              {repo.language && (
                <span className="px-2 py-1 bg-foreground/10 rounded-full text-foreground/70">
                  {repo.language}
                </span>
              )}
              <span className="text-foreground/60">
                {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center">
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
        >
          View all repositories on GitHub →
        </a>
      </div>
    </div>
  );
}
