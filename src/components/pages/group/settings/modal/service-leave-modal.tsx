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

export function ServiceLeaveModal() {
  return (
    <Modal isOpen={false} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>와글와글 탈퇴</Text>
          <CloseButton />
        </ModalHeader>
        <ModalBody>
          <Text>와글와글 서비스를 떠나실 건가요?</Text>
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
