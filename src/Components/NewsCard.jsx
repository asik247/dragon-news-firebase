import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Eye, FileSpreadsheetIcon, Star } from 'lucide-react';

// NewsCard component
// Props: news (object) — shape matches the JSON you provided
// TailwindCSS is used for styling (no external CSS required)

export default function NewsCard({ news }) {
  if (!news) return null;

  const {
    title,
    image_url,
    thumbnail_url,
    details,
    author,
    rating,
    total_view,
    tags = [],
    others = {},
  } = news;

  const published = author?.published_date
    ? format(new Date(author.published_date), 'PPP')
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 p-0"
      aria-labelledby={`news-title-${news.id || Math.random()}`}
    >
      {/* Image */}
      <div className="md:col-span-1 h-48 md:h-auto relative">
        <img
          src={image_url || thumbnail_url}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full md:rounded-l-2xl md:rounded-none"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = thumbnail_url || 'https://via.placeholder.com/640x360?text=No+Image';
          }}
        />
        {/* Trending badge */}
        {others?.is_trending && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-sm font-semibold text-gray-900 px-3 py-1 rounded-full shadow-md">
            <FileSpreadsheetIcon size={14} /> Trending
          </span>
        )}
      </div>

      {/* Content */}
      <div className="md:col-span-2 p-4 flex flex-col justify-between gap-3">
        <header>
          <h3 id={`news-title-${news.id || Math.random()}`} className="text-lg md:text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {details}
          </p>
        </header>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <img
              src={author?.img || 'https://via.placeholder.com/40?text=A'}
              alt={author?.name || 'Author'}
              className="w-9 h-9 rounded-full object-cover shadow-sm"
              loading="lazy"
            />
            <div className="text-sm">
              <div className="font-medium text-gray-800 dark:text-gray-100">{author?.name || 'Unknown'}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{published || '—'}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
              <Star size={14} />
              <span className="font-semibold">{rating?.number ?? 0}</span>
              <span className="sr-only">rating</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
              <Eye size={14} />
              <span>{total_view ?? 0}</span>
              <span className="sr-only">views</span>
            </div>
          </div>
        </div>

        <footer className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full">
                #{t}
              </span>
            ))}

            {others?.is_today_pick && (
              <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
                Today's Pick
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#read"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              Read more
            </a>

            <button
              type="button"
              className="px-3 py-2 border rounded-xl text-sm text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => navigator.share?.({ title, text: details?.slice(0, 120), url: window.location.href })}
              aria-label="Share article"
            >
              Share
            </button>
          </div>
        </footer>
      </div>
    </motion.article>
  );
}

/*
Usage example:

<NewsCard news={newsObject} />

Where `newsObject` matches the JSON you provided (id, title, image_url, details, author, rating, tags, others, etc.)

Notes:
- Uses TailwindCSS (utility classes) and Framer Motion for smooth entrance animation.
- Uses `date-fns` for date formatting. If you don't want that dependency, remove the import and display raw dates.
- Icons use lucide-react (available in the app shell). Replace or remove if not available.
- Designed to be responsive: image left on md+ screens, stacked on small screens.
*/
