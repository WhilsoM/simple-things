import { Cases } from '@widgets/cases/Cases'
import { LearningPaper } from '@widgets/learning-paper/LearningPaper'
import { Partners } from '@widgets/partners/Partners'
import { SimpleThings } from '@widgets/simple-things/SimpleThings'
import { Sketchbook } from '@widgets/sketchbook/Sketchbook'

export const HomePage = () => {
  return (
    <>
      <SimpleThings />
      <LearningPaper />
      <Cases />
      <Partners />
      <Sketchbook />
    </>
  )
}
