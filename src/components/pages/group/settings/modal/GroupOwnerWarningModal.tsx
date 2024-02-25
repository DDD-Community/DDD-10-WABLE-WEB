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

export function GroupOwnerWarningModal() {
  return (
    <Modal isOpen={false} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>그룹장은 탈퇴할 수 없습니다.</Text>
          <CloseButton />
        </ModalHeader>
        <ModalBody>
          <Text>
            그룹장은 그룹에 팀원이 1명 이상 있을 시 탈퇴할 수 없습니다.
          </Text>
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
