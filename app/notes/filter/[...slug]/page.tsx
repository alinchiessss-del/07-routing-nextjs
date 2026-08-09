import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';
import type { NoteTag } from '@/types/note';

import NotesClient from './Notes.client';

interface NotesPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;

  const currentTag = slug[0];

  const tag: NoteTag | undefined =
    currentTag === 'all' ? undefined : (currentTag as NoteTag);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: '',
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}