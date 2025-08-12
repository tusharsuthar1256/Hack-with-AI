import Companionscards from "@/components/Companionscards";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const page = async ({searchParams}:SearchParams) => {

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({subject,topic});

  
  
  return (
 <main>
  <section className="flex justify-between gap-4 max-sm:f;ex-col">
<h1>Companions Library</h1>
<div className="flex gap-4">
  <SearchInput />
  <SubjectFilter />
</div>
  </section>
  <section className="companions-grid">
{companions.map((companion) => (
  <Companionscards key={companion.id} {...companion} color={getSubjectColor(companion.subject)}
  />
))}
  </section>
 </main>
  ) 
}

export default page
