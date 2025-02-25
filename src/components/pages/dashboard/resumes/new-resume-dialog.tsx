import { BaseDialogProps, Dialog } from "@/components/ui/dialog"

export const NewResumeDialog = (props: BaseDialogProps) => {
    return(
        <Dialog 
            {...props}
            title="Criar novo currículo"
            description="Para começar, escolha um título para o seu currículo"
            content={
                <form>
                    
                </form>
            }
        />
    )
}