import { Button, Label, Textarea, TextInput } from 'flowbite-react'

function FeedbackForm() {
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                    id="email1"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                />
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default FeedbackForm
