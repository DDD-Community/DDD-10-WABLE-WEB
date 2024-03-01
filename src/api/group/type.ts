interface GroupInfo {
  id: number;
  name: string;
}

interface GroupListInfo {
  groups: GroupInfo[];
}

export type { GroupInfo, GroupListInfo };
