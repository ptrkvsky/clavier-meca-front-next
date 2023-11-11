import { List } from '@/app/(features)/plan-site/components/List';
import { title } from '@/app/styles/titles.css';

export default function PlanSite() {
  return (
    <div>
      <h1 className={title.main}>Plan du site</h1>
      <List />
    </div>
  );
}
