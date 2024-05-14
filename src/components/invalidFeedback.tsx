interface InvalidFeedbackProps {
  message: string
}

const InvalidFeedback = ({ message }: InvalidFeedbackProps) => (
  <p className="absolute top-full left-0 text-sm text-[#EE4222]">{message}</p>
)

export default InvalidFeedback
