import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { ListItem } from "@/components/ListItem";
import { Panel } from "@/components/Panel";
import Link from "next/link";

const CHANGES_MOCK = [
  {
    name: "Change 1",
    id: 1,
  },

  {
    name: "Change 2",
    id: 2,
  },
  {
    name: "Change 3",
    id: 3,
  },
  {
    name: "Change 4",
    id: 4,
  },
];

export default function Page() {
  return (
    <Container>
      <Panel>
        <Header className="mb-0 flex">Changes</Header>
      </Panel>

      <div className="grid grid-cols-12 gap-2">
        <Panel className="col-span-12">
          <List>
            {CHANGES_MOCK.map((change) => (
              <ListItem key={change.id}>
                <Link
                  className="block w-full"
                  href={`/changes/${change.id}`}
                >
                  {change.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Panel>
      </div>
    </Container>
  );
}
