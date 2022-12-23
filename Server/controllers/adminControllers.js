const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const adminHelpers = require('../helpers/adminHelpers');
const commenHelpers = require('../helpers/CommenHelpers');

const adminLogin = AsyncHandler(async (req, res) => {
  adminHelpers.doadminLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.name,
          email: response.user.email,
          Role: 'Admin',
        },
        process.env.JWT_SECRET
      );
      return res.json({ status: 'ok', user: token });
    }
    res.json({ status: 'error', user: false });
  });
});

const userInfo = AsyncHandler((req, res) => {
  adminHelpers
    .userdetails()
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', clientDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});

const activeTrainerInfo = AsyncHandler((req, res) => {
  adminHelpers
    .activeTrainerdetails()
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', activetrainerDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});

const updateUserInfo = AsyncHandler(async (req, res) => {
  await adminHelpers
    .editUser(req.body)
    .then(() => res.json({ status: true }))
    .catch(() => res.json({ status: false }));
});
const trainerApprovel = AsyncHandler((req, res) => {
  adminHelpers
    .trainerApprovel()
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', clientDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const getTrainerDetails = AsyncHandler((req, res) => {
  const id = req.params.id;
  adminHelpers
    .trainerDetails(id)
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', trainerDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const getuserDetails = AsyncHandler((req, res) => {
  const id = req.params.id;
  adminHelpers
    .userDetails(id)
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', userDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const rejectTrainer = AsyncHandler((req, res) => {
  const id = req.params.id;

  adminHelpers
    .rejectTrainer(id)
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', rejected: true, trainerDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const approvelTrainer = AsyncHandler((req, res) => {
  const id = req.params.id;

  adminHelpers
    .approvelTrainer(id)
    .then((details) => {
      console.log('done');

      res.json({ status: 'ok', rejected: true, trainerDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const unBlockTrainer = AsyncHandler((req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelpers
    .unBlockTrainer(id)
    .then((details) => {
      console.log(details);

      res.json({
        status: 'ok',
        unBlock: true,
        trainerDetails: details,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
const blockTrainer = AsyncHandler((req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelpers
    .blockTrainer(id)
    .then((details) => {
      console.log(details);

      res.json({
        status: 'ok',
        block: true,
        trainerDetails: details,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
const unBlockUser = AsyncHandler((req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelpers
    .unBlockUser(id)
    .then((details) => {
      console.log(details);

      res.json({
        status: 'ok',
        unBlock: true,
        userDetails: details,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
const blockUser = AsyncHandler((req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelpers
    .blockUser(id)
    .then((details) => {
      console.log(details);

      res.json({
        status: 'ok',
        block: true,
        userDetails: details,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
const addPlan = AsyncHandler((req, res) => {
  console.log(req.body);
  adminHelpers
    .addPlan(req.body)
    .then(() => {
      res.json({ status: 'success' });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: 'error' });
    });
});
const getallPlans = AsyncHandler((req, res) => {
  commenHelpers
    .viewAllPlan()
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', planDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const uploadVideo = AsyncHandler((req, res) => {
  const data = req.body;
  const ytUrl = data.link;
  // replace:

  data.link = ytUrl.replace('/watch?v=', '/embed/');
  commenHelpers
    .uploadVideo(req.body)
    .then(() => {
      res.json({ status: 'success' });
    })
    .catch((err) => {
      console.log(err);
    });
});

const removePackage = AsyncHandler((req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelpers
    .removePackage(id)
    .then((details) => {
      console.log(details);

      res.json({
        status: 'ok',
        block: true,
        Plans: details,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 'error',
      });
    });
});

// exports
module.exports = {
  adminLogin,
  userInfo,
  updateUserInfo,
  trainerApprovel,
  getTrainerDetails,
  getuserDetails,
  rejectTrainer,
  approvelTrainer,
  activeTrainerInfo,
  unBlockTrainer,
  blockTrainer,
  addPlan,
  blockUser,
  unBlockUser,
  getallPlans,
  uploadVideo,
  removePackage,
};
