
export interface MediaItem {
  id: string;
  title: string | null;
  caption: string | null;
  path: string | File;
  postedTo: string[];
}
