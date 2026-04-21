'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-gray-900 tracking-tight">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">Страница не найдена</h2>

        {/* Description */}
        <p className="mt-2 text-gray-500">
          Похоже, такой страницы не существует или она была перемещена.
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            На главную
          </Link>

          <button
            onClick={() => history.back()}
            className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}
