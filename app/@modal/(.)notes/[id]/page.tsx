import { Suspense } from 'react';
import type { Metadata } from 'next';
import NoteDetailsClient from './NoteDetails.client';

interface NoteDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: NoteDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Note ${id}`,
  };
}

export default async function NoteDetailsPage({
  params,
}: NoteDetailsPageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<p>Loading note...</p>}>
      <NoteDetailsClient id={id} />
    </Suspense>
  );
}