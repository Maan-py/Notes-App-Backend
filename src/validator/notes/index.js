const { NotePayloadSchema } = require("./schema");

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validator(payload);
    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
  },
};
