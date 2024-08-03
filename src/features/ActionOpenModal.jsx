import { Modal } from '@share/modal/Modal'
import { useState } from 'react'

export const ActionOpenModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      {isOpenModal && <Modal />}
    </>
  )
}
