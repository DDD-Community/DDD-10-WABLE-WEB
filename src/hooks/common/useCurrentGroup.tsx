import { useRouter } from 'next/router';
import { useMyGroupsQuery } from '../queries/group/useMyGroupsQuery';

// 현재 라우트에 해당하는 그룹의 id와 name을 반환하는 커스텀 훅
export function useCurrentGroup() {
  const router = useRouter();

  const { data } = useMyGroupsQuery();

  return data?.groups.find(
    (group) => group.name === router.query['group-name'],
  );
}
