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

export function GroupLeaveModal() {
  return (
    <Modal isOpen={false} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>그룹 탈퇴</Text>
          <CloseButton />
        </ModalHeader>
        <ModalBody>
          <Text>그룹을 탈퇴하시겠습니까?</Text>
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyItems="flex-end"
          gap="12px"
          alignItems="center"
        >
          <Button variant="tertiary">취소</Button>
          <Button variant="quaternary">확인</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
