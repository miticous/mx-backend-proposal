import models from '../../../models';

const { Member, MemberTypes } = models;

const MemberService = {
  getMembers: async () => {
    const members = await Member.findAll({
      include: [{
        model: MemberTypes,
        required: true,
      }],
    });

    return members;
  },
};

export default MemberService;
