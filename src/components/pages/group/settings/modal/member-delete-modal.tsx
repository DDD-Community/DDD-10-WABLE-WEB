import {
  Button,
  CloseButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

export function MemberDeleteModal() {
  return (
    <Modal isOpen={false} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>팀원 삭제</Text>
          <CloseButton />
        </ModalHeader>
        <ModalBody>
          <Text>팀원을 그룹에서 삭제하시겠습니까?</Text>
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyItems="flex-end"
          gap="12px"
          alignItems="center"
        >
          <Button variant="tertiary">취소</Button>
          <Button variant="error">삭제</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
