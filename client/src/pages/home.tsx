import { useQuery } from "@tanstack/react-query";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });
  return (
    <main className={`min-h-screen`}>
      <UiHeader right={<div>{data?.email}</div>} />
      <UiButton variant="primary">Primary</UiButton>
      <UiButton variant="secondary">Secondary</UiButton>
      <UiButton variant="outlined">Outlined</UiButton>
      <UiButton disabled variant="primary">
        Primary Disabled
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: "Enter email..." }}
      />
      <UiTextField
        error="Error message"
        inputProps={{ placeholder: "Enter error..." }}
      />
      <UiTextField />
      <UiSelectField
        selectProps={{ placeholder: "Enter error..." }}
        options={[{ value: "1", label: "Hello" }]}
      />
      <UiLink href={"/"}>Hello World!</UiLink>
      <UiSpinner className="h-20 w-20 text-teal-600" />
    </main>
  );
}
