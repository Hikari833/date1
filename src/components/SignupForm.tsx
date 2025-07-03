import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface SignupFormProps {
  onComplete?: (formData: FormData) => void;
}

type FormData = {
  basicInfo: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthDate: string;
    gender: string;
  };
  disabilityInfo: {
    hasDisability: boolean;
    disabilityType: string[];
    mobilityAids: string[];
    additionalInfo: string;
  };
  interests: {
    hobbies: string[];
    lookingFor: string;
    relationshipGoals: string;
    aboutMe: string;
  };
  accessibilityNeeds: {
    textSize: string;
    highContrast: boolean;
    screenReader: boolean;
    otherNeeds: string;
  };
};

const SignupForm: React.FC<SignupFormProps> = ({ onComplete = () => {} }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    basicInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: "",
      gender: "",
    },
    disabilityInfo: {
      hasDisability: false,
      disabilityType: [],
      mobilityAids: [],
      additionalInfo: "",
    },
    interests: {
      hobbies: [],
      lookingFor: "",
      relationshipGoals: "",
      aboutMe: "",
    },
    accessibilityNeeds: {
      textSize: "medium",
      highContrast: false,
      screenReader: false,
      otherNeeds: "",
    },
  });

  const steps = [
    "Basic Information",
    "Disability Information (Optional)",
    "Interests & Preferences",
    "Accessibility Needs",
  ];

  const updateFormData = (
    section: keyof FormData,
    field: string,
    value: any,
  ) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderBasicInfoStep = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            value={formData.basicInfo.firstName}
            onChange={(e) =>
              updateFormData("basicInfo", "firstName", e.target.value)
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            value={formData.basicInfo.lastName}
            onChange={(e) =>
              updateFormData("basicInfo", "lastName", e.target.value)
            }
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.basicInfo.email}
          onChange={(e) => updateFormData("basicInfo", "email", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Create a password"
          value={formData.basicInfo.password}
          onChange={(e) =>
            updateFormData("basicInfo", "password", e.target.value)
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="birthDate">Birth Date</Label>
        <Input
          id="birthDate"
          type="date"
          value={formData.basicInfo.birthDate}
          onChange={(e) =>
            updateFormData("basicInfo", "birthDate", e.target.value)
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select
          value={formData.basicInfo.gender}
          onValueChange={(value) =>
            updateFormData("basicInfo", "gender", value)
          }
        >
          <SelectTrigger id="gender">
            <SelectValue placeholder="Select your gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="non-binary">Non-binary</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderDisabilityInfoStep = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasDisability"
          checked={formData.disabilityInfo.hasDisability}
          onCheckedChange={(checked) =>
            updateFormData("disabilityInfo", "hasDisability", checked)
          }
        />
        <Label htmlFor="hasDisability">
          I have a disability or accessibility needs
        </Label>
      </div>

      {formData.disabilityInfo.hasDisability && (
        <>
          <div className="space-y-2">
            <Label>Disability Type (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Mobility",
                "Visual",
                "Hearing",
                "Cognitive",
                "Neurological",
                "Other",
              ].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`disability-${type}`}
                    checked={formData.disabilityInfo.disabilityType.includes(
                      type,
                    )}
                    onCheckedChange={(checked) => {
                      const currentTypes = [
                        ...formData.disabilityInfo.disabilityType,
                      ];
                      if (checked) {
                        updateFormData("disabilityInfo", "disabilityType", [
                          ...currentTypes,
                          type,
                        ]);
                      } else {
                        updateFormData(
                          "disabilityInfo",
                          "disabilityType",
                          currentTypes.filter((t) => t !== type),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`disability-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Mobility Aids (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Wheelchair",
                "Walker",
                "Cane",
                "Prosthetic",
                "Service Animal",
                "None",
                "Other",
              ].map((aid) => (
                <div key={aid} className="flex items-center space-x-2">
                  <Checkbox
                    id={`aid-${aid}`}
                    checked={formData.disabilityInfo.mobilityAids.includes(aid)}
                    onCheckedChange={(checked) => {
                      const currentAids = [
                        ...formData.disabilityInfo.mobilityAids,
                      ];
                      if (checked) {
                        updateFormData("disabilityInfo", "mobilityAids", [
                          ...currentAids,
                          aid,
                        ]);
                      } else {
                        updateFormData(
                          "disabilityInfo",
                          "mobilityAids",
                          currentAids.filter((a) => a !== aid),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`aid-${aid}`}>{aid}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Share any additional information about your disability or accessibility needs that you'd like potential matches to know"
              value={formData.disabilityInfo.additionalInfo}
              onChange={(e) =>
                updateFormData(
                  "disabilityInfo",
                  "additionalInfo",
                  e.target.value,
                )
              }
              className="min-h-[100px]"
            />
          </div>
        </>
      )}

      <div className="text-sm text-muted-foreground">
        This information is optional and will only be shared with potential
        matches if you choose to do so.
      </div>
    </div>
  );

  const renderInterestsStep = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Hobbies & Interests (Select all that apply)</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "Reading",
            "Movies",
            "Music",
            "Art",
            "Sports",
            "Cooking",
            "Travel",
            "Gaming",
            "Technology",
            "Nature",
            "Fitness",
            "Photography",
          ].map((hobby) => (
            <div key={hobby} className="flex items-center space-x-2">
              <Checkbox
                id={`hobby-${hobby}`}
                checked={formData.interests.hobbies.includes(hobby)}
                onCheckedChange={(checked) => {
                  const currentHobbies = [...formData.interests.hobbies];
                  if (checked) {
                    updateFormData("interests", "hobbies", [
                      ...currentHobbies,
                      hobby,
                    ]);
                  } else {
                    updateFormData(
                      "interests",
                      "hobbies",
                      currentHobbies.filter((h) => h !== hobby),
                    );
                  }
                }}
              />
              <Label htmlFor={`hobby-${hobby}`}>{hobby}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lookingFor">I am looking for</Label>
        <Select
          value={formData.interests.lookingFor}
          onValueChange={(value) =>
            updateFormData("interests", "lookingFor", value)
          }
        >
          <SelectTrigger id="lookingFor">
            <SelectValue placeholder="Select what you're looking for" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="friendship">Friendship</SelectItem>
            <SelectItem value="dating">Dating</SelectItem>
            <SelectItem value="long-term">Long-term Relationship</SelectItem>
            <SelectItem value="marriage">Marriage</SelectItem>
            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="relationshipGoals">Relationship Goals</Label>
        <Select
          value={formData.interests.relationshipGoals}
          onValueChange={(value) =>
            updateFormData("interests", "relationshipGoals", value)
          }
        >
          <SelectTrigger id="relationshipGoals">
            <SelectValue placeholder="Select your relationship goals" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="casual">Casual</SelectItem>
            <SelectItem value="serious">Serious</SelectItem>
            <SelectItem value="open-minded">Open-minded</SelectItem>
            <SelectItem value="exploring">Just Exploring</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="aboutMe">About Me</Label>
        <Textarea
          id="aboutMe"
          placeholder="Tell potential matches about yourself"
          value={formData.interests.aboutMe}
          onChange={(e) =>
            updateFormData("interests", "aboutMe", e.target.value)
          }
          className="min-h-[150px]"
        />
      </div>
    </div>
  );

  const renderAccessibilityStep = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="textSize">Preferred Text Size</Label>
        <RadioGroup
          value={formData.accessibilityNeeds.textSize}
          onValueChange={(value) =>
            updateFormData("accessibilityNeeds", "textSize", value)
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="textSize-small" />
            <Label htmlFor="textSize-small">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="textSize-medium" />
            <Label htmlFor="textSize-medium">Medium (Default)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="textSize-large" />
            <Label htmlFor="textSize-large">Large</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="x-large" id="textSize-x-large" />
            <Label htmlFor="textSize-x-large">Extra Large</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="highContrast"
          checked={formData.accessibilityNeeds.highContrast}
          onCheckedChange={(checked) =>
            updateFormData("accessibilityNeeds", "highContrast", checked)
          }
        />
        <Label htmlFor="highContrast">Enable High Contrast Mode</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="screenReader"
          checked={formData.accessibilityNeeds.screenReader}
          onCheckedChange={(checked) =>
            updateFormData("accessibilityNeeds", "screenReader", checked)
          }
        />
        <Label htmlFor="screenReader">Optimize for Screen Readers</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="otherNeeds">Other Accessibility Needs</Label>
        <Textarea
          id="otherNeeds"
          placeholder="Please describe any other accessibility needs or preferences"
          value={formData.accessibilityNeeds.otherNeeds}
          onChange={(e) =>
            updateFormData("accessibilityNeeds", "otherNeeds", e.target.value)
          }
          className="min-h-[100px]"
        />
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderBasicInfoStep();
      case 1:
        return renderDisabilityInfoStep();
      case 2:
        return renderInterestsStep();
      case 3:
        return renderAccessibilityStep();
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-background">
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Your Account
          </CardTitle>
          <CardDescription className="text-center">
            Join our inclusive dating community in {steps.length} easy steps
          </CardDescription>
          <div className="mt-4">
            <Progress
              value={((currentStep + 1) / steps.length) * 100}
              className="h-2"
            />
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index <= currentStep ? "text-primary" : "text-muted-foreground"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${index < currentStep ? "bg-primary text-primary-foreground" : index === currentStep ? "border-2 border-primary" : "border-2 border-muted"}`}
                  >
                    {index < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-xs mt-1 hidden sm:block">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent()}
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
          <Button onClick={handleNext} className="flex items-center gap-2">
            {currentStep === steps.length - 1 ? "Complete" : "Next"}
            {currentStep < steps.length - 1 && (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupForm;
