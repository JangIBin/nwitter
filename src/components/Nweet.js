import { dbService } from "fbase"

const Nweet = ({nweetOBJ, isOwner}) => {
    const onDeleteClick = async() => {
        const ok = window.confirm("삭제하시겠습니끼?");
        console.log(ok);
    }
    if(ok) {
        console.log(nweetOBJ.id);
        const data = await dbService.doc(`nweetObj/${nweetObj.id}`).delete();
        console.data();
    }
    return (
        <div>
            <h4>{nweetOBJ.text}</h4>
            {/* {isOwner && {
                <>
                    <button>Delete Nweet</button>
                    <button>Edit setNweet</button>
                </>
            }
            } */}
        </div>
    )
}